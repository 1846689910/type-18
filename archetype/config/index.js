const jqueryUiMinCss = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" integrity="sha256-rByPlHULObEjJ6XQxW/flG2r+22R5dKiAoef+aXWfik=" crossorigin="anonymous" />`;
const jqueryUiMinJs = `<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha256-KM512VNnjElC30ehFwehXjx1YCHPiQkOPmqnrWtpccM=" crossorigin="anonymous"></script>`;
const jqueryMinJs = `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>`;

const bootstrapMinCss = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha256-YLGeXaapI0/5IgZopewRJcFXomhRMlYYjugPLSyNjTY=" crossorigin="anonymous" />`;
const bootstrapBundleMinJs = `<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha256-fzFFyH01cBVPYzl16KT40wqjhgPtq6FFUB6ckN2+GGw=" crossorigin="anonymous"></script>`;

module.exports = {
  webpack: {
    enableShortenCSSNames: true,
    htmlWebpackPluginOptions: {
      title: "type-18",
      unbundled: {
        pre: {
          css: [jqueryUiMinCss, bootstrapMinCss],
          js: [
            "<script type='text/javascript'>console.log('pre-js')</script>",
            jqueryMinJs,
            jqueryUiMinJs,
            bootstrapBundleMinJs
          ]
        },
        post: {
          js: ["<script type='text/javascript'>console.log('post-js')</script>"]
        }
      }
    }
  },
  babel: {
    enableTypeScript: true
  }
};
