 <template>
    <div class="menu">
        <div class="layout">
            <Row type="flex">
                <i-col span="4" class="layout-menu-left">
                    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                        <div class="layout-logo-left"></div>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                导航一
                            </template>
                                    <Menu-item name="1-1">
                                            <router-link to="/sign/123"> 选项 1</router-link>
                                    </Menu-item>
                                    <Menu-item name="1-2">选项 2</Menu-item>
                                    <Menu-item name="1-3">选项 3</Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                导航二
                            </template>
                            <Menu-item name="2-1">选项 1</Menu-item>
                            <Menu-item name="2-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                导航三
                            </template>
                            <Menu-item name="3-1">选项 1</Menu-item>
                            <Menu-item name="3-2">选项 2</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="20">
                    <div class="layout-header">
                        <div class="layout-ceiling">
                        <div class="layout-ceiling-main">
                            <a href="#">注册登录</a> |
                            <a href="#">帮助中心</a> |
                            <a href="#">安全中心</a> |
                            <a href="#">服务大厅</a>
                        </div>
                        </div>
                    </div>
                    <div class="layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb-item href="#">首页</Breadcrumb-item>
                            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                            <Breadcrumb-item>某应用</Breadcrumb-item>
                        </Breadcrumb>
                    </div>
                    <div class="layout-content">
                        <div class="layout-content-main">
                        <router-view></router-view>
                        </div>
                    </div>
                    <div class="layout-copy">
                        2011-2016 &copy; TalkingData
                    </div>
                </i-col>
            </Row>
    </div>
 </div>
  
</template>

<script>
export default {
    name: 'menu'

}
</script>

<style scope="" lang="sass">
 @import '../../sass/menus.sass'

</style>