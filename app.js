/*
 1. 鼠标移入显示,移出隐藏
    目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)

 9. 点击向右/左, 移动当前展示商品的小图片
 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */
/*
1)对哪些元素绑定监听--2)对哪些元素进行什么DOM操作  找规律
*/

$(function () {
  showhide()
  hoverSubMenu()
  search()
  share()

  // 5. 鼠标移入移出切换地址的显示隐藏

  //4. 点击显示或者隐藏更多的分享图标
  function share() {
    var isOpen = false //关闭 打开状态，定义一个布尔值 标识当前状态,初始为关闭
    var $shareMore = $('#shareMore')
    var $parent = $shareMore.parent()
    var $as = $shareMore.prevAll('a:lt(2)')
    var $b = $shareMore.children('b')

    $shareMore.click(function () {
      if (isOpen) {
        //去关闭
        isOpen = false
        $parent.css('width', 155)
        $as.hide()
        $b.removeClass('backword')
      } else {
        //去打开
        isOpen = true
        $parent.css('width', 200)
        $as.show()
        $b.addClass('backword')
      }
    })
  }

  // 3. 输入搜索关键字, 列表显示匹配的结果
  function search() {
    $('#txtSearch')
      .on('focus keyup', function () {
        //如果输入框有文本才显示列表
        var txt = this.value.trim()
        if (txt) {
          $('#search_helper').show()
        }
      })
      .blur(function () {
        $('#search_helper').hide()
      })
  }

  /*2. 鼠标移动切换二级导航菜单的切换显示和隐藏*/
  function hoverSubMenu() {
    $('#category_items>div').hover(
      function () {
        $(this).children(':last').show()
      },
      function () {
        $(this).children(':last').hide()
      }
    )
  }

  // 1. 鼠标移入显示,移出隐藏 目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
  function showhide() {
    $('[name=show_hide]').hover(
      function () {
        //显示
        var id = this.id + '_items'
        $('#' + id).show()
      },
      function () {
        //隐藏
        var id = this.id + '_items'
        $('#' + id).hide()
      }
    )
  }
})
