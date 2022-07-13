import { interfaces } from 'Garfish'
import type { MenuProps } from 'antd'

type GetElementType<T extends any[] | undefined> = T extends (infer U)[] ? U : never
type Route = interfaces.AppInfo & { menuItem: GetElementType<MenuProps['items']> }

const routes: Route[] = [
  {
    name: 'sub-app-vite',
    activeWhen: '/sub-app-vite',
    entry: 'http://localhost:3001',
    sandbox: false,
    menuItem: {
      label: 'Vite sub app',
      key: '/sub-app-vite',
    },
  },
  {
    name: 'sub-app-2',
    activeWhen: '/sub-app-2',
    entry: 'http://localhost:4001',
    menuItem: {
      label: 'Sub app 2',
      key: '/sub-app-2',
    },
  },
  {
    name: 'sub-app-mas',
    activeWhen: '/manual-authorisation-ui',
    entry: 'http://localhost:3010/manual-authorisation-ui/',
    sandbox: false,
    menuItem: {
      label: 'MAS UI',
      key: '/manual-authorisation-ui',
    },
  }
]

export default routes
