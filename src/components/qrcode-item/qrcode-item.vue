<script>
import QRious from 'qrious';
export default {
  name: 'bve-qrcode-item',
  props: {
    /*
     * The value of the qrcode.
     */
    value: {
      type: String,
      required: true,
    },

    /*
     * The options for the qrcode generator.
     * {@link https://github.com/lindell/JsQrcode#options}
     */
    config: {
      type: Object,
    },

    /*
     * The tag of the component root element.
     */
    tag: {
      type: String,
      default: 'canvas',
    },
  },

  render(createElement) {
    return createElement(this.tag, this.$slots.default);
  },

  watch: {
    /*
     * Update qrcode when value change
     */
    value() {
      this.generate();
    },

    /*
     * Update qrcode when config change
     */
    config() {
      this.generate();
    },
  },

  mounted() {
    this.generate();
  },

  methods: {
    /**
     * Generate qrcode
     */
    generate() {
      // eslint-disable-next-line
      new QRious(Object.assign({
        element: this.$el,
        value: this.value,
      }, this.config));
    },
  },
};
</script>
