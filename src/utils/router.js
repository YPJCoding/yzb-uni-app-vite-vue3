import { subPackages, pages } from "../pages.json"

/**
 * 通过读取pages.json文件 生成直接可用的routes
 */

let routes = []

// 主包
routes = pages.map(({ name, path }) => {
  return { name, path }
})

// 分包
for (let i = 0; i < subPackages.length; i++) {
  const subPages = subPackages[i].pages;
  const root = subPackages[i].root;
  for (let o = 0; o < subPages.length; o++) {
    const item = subPages[o];
    routes.push({
      name: item.name,
      path: `${root}/${item.path}`
    })
  }
}

export function useRouter() {
  function getPath(name) {
    let url = ''
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];
      if (item.name === name) {
        url = item.path
        break
      }
    }
    return url
  }
  return {
    /**
     * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
     */
    push({ name, query }) {
      uni.$u.route({
        type: "navigateTo",
        url: getPath(name),
        params: query
      })
    },

    /**
     * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
     */
    replace({ name, query }) {
      uni.$u.route({
        type: "reLaunch",
        url: getPath(name),
        params: query
      })
    },

    /**
     * 关闭当前页面，返回上一页面或多级页面。
     * @param {Number} delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
     */
    back(delta = 1) {
      uni.$u.route({
        type: "navigateBack",
        delta
      })
    }
  }
}

// 获取当前页对象
export function useRoute() {
  let pages = getCurrentPages()
  return pages.pop()
}
