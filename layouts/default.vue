<template>
  <v-app :dark="dark">
    <v-navigation-drawer persistent :mini-variant="miniVariant" v-model="drawer" enable-resize-watcher fixed app>
      <v-list class="pa-1">
        <v-list-tile avatar tag="div" class="pb-1">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list class="pt-0" dense>
          <v-divider light></v-divider>
          <template v-for="item in menuItems">

            <v-list-group v-if="item.children" :key="item.to" :prepend-icon="item.icon">
              <v-list-tile slot="activator">
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile>
              <v-list-tile class="sub-menu__item grey lighten-3" v-for="child in item.children" :key="item.prefix + child.to" :to="item.prefix + child.to">
                <v-list-tile-title v-text="child.title"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon :color="$route.path.includes(item.prefix + child.to)? 'blue' :''" v-text="child.icon"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>

            <v-list-tile v-else :key="item.to" :to="item.to">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>

          </template>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <v-tooltip bottom>
      <v-toolbar-side-icon slot="activator" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span>Toggle drawer</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" icon @click.stop="miniVariant = !miniVariant">
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <span>{{miniVariant? 'Expand drawer' : 'Collapse drawer'}}</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" icon @click.stop="clipped = !clipped">
          <v-icon :color="clipped? 'blue' : ''">web</v-icon>
         </v-btn>
        <span>{{clipped? 'Unclip drawer' : 'Clip drawer'}}</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn slot="activator" icon @click.stop="fixed = !fixed">
          <v-icon :color="fixed? 'blue' : ''">web</v-icon>
        </v-btn>
        <span> {{fixed? 'Scrollable toolbar' : 'Fix toolbar' }} </span>
      </v-tooltip>

      <v-toolbar-title class="hidden-xs-only" v-text="title"></v-toolbar-title>
      <v-breadcrumbs divider="/" :items="$route.matched">
        <template slot="item" slot-scope="props">
            <nuxt-link :to="props.item.path" tag="span" :disabled="$route.matched.indexOf(props.item) == $route.matched.length - 1">{{ props.item.name }}</nuxt-link>
        </template>
        <!-- <v-breadcrumbs-item v-for="item in $route.matched" :key="item.fullPath" :disabled="$route.matched.indexOf(item) == $route.matched.length - 1">
          <nuxt-link :to="item.path" tag="span">{{ item.name }}</nuxt-link>
        </v-breadcrumbs-item> -->
      </v-breadcrumbs>

      <v-spacer></v-spacer>
      <v-badge left>
        <span slot="badge" class="caption">6</span>
        <template>
          <div class="text-xs-center">
            <v-menu :close-on-content-click="false" :nudge-width="200" left>
              <v-icon slot="activator" color="grey lighten-1" @click="">
                notifications_none
              </v-icon>

              <v-card>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-title>Notifications</v-list-tile-title>
                  </v-list-tile>
                  <v-divider></v-divider>
                  <div class="notifications">
                    <v-list>
                      <v-list-tile ripple v-for="i in 10" :key="i" to="#">
                        <v-list-tile-action>
                          <v-icon>person</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Notification {{i}}</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </div>
                </v-list>
              </v-card>
            </v-menu>
          </div>
        </template>
      </v-badge>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <nuxt></nuxt>
    </v-content>
    <v-navigation-drawer temporary right v-model="rightDrawer" fixed app class="pa-2">
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import navigation from '~/assets/js/navigation';
export default {
	asyncData() {
		return {
			drawer: true
		};
	},
	data() {
		return {
			title: 'Nuxtify Express',
			dark: false,
			clipped: false,
			drawer: true,
			fixed: false,
			right: true,
			miniVariant: false,
			rightDrawer: false,
			menuItems: navigation
		};
	}
};
</script>
<style lang="scss" scoped>
.v-navigation-drawer {
	::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: #ff0000;
	}
}
.notifications {
	max-height: 300px;
	overflow: hidden scroll;
}
.sub-menu__item {
	// border-left: solid 2px blue !important;
}
</style>
