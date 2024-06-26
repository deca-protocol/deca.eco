import lume from "lume/mod.ts";
import relativeUrls from "lume/plugins/relative_urls.ts";
import blog from "blog/mod.ts";

const site = lume({
  location: new URL("https://dev.deca.eco"),
  //location: new URL("https://deca.eco"),
});

site.copy("img");

site.use(relativeUrls());
site.use(blog());

export default site;
