import * as ele from "element-plus";

const ELEMENT_COMPONET_PREFIX = "El";

const isComponet = (key) => {
  const val = ele[key];
  return (
    key.startsWith(ELEMENT_COMPONET_PREFIX) &&
    typeof val === "object" &&
    val.name &&
    typeof val.name === "string" &&
    val.name.startsWith(ELEMENT_COMPONET_PREFIX)
  );
};

const renameCompoent = (elName, customPrefix) => elName.replace(ELEMENT_COMPONET_PREFIX, customPrefix)

export const createElementPlusCompAlias = prefix => ({
  install: (app, options) => {
    const components = Object.keys(ele).filter(k => isComponet(k)).map(k => ele[k]);
    components.forEach(c => {
      const customComp = Object.assign({}, c);
      customComp.name = renameCompoent(customComp.name, prefix)
      app.component(customComp.name, customComp)
    })
    ele.install(app, options)
  }
})
