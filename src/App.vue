<script>
import { mpOpenId } from './utils/login';

export default {
  onLaunch: function () {
    console.log('import.meta.env.VITE_APP_ENV', import.meta.env.VITE_APP_ENV);
    mpOpenId()
  },
  onShow: function () {

  },
  onHide: function () {

  },
}
</script>

<style lang="scss">
@import "vk-uview-ui/index.scss";
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
</style>
