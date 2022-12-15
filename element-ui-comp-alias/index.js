import * as ele from 'element-ui';

const ELEMENT_COMPONET_PREFIX = "El";

const isComponet = (key) => {
  const val = ele[key];
  return (
    typeof val === "object" &&
    val.name &&
    typeof val.name === "string" &&
    val.name.startsWith(ELEMENT_COMPONET_PREFIX)
  );
};

const renameCompoent = (elName, customPrefix) => elName.replace(ELEMENT_COMPONET_PREFIX, customPrefix)

export const createElementUICompAlias = prefix => ({
  install: (Vue, options) => {
    const components = Object.keys(ele).filter(k => isComponet(k)).map(k => ele[k]);
    components.forEach(c => {
      const customComp = Object.assign({}, c);
      const newName = renameCompoent(customComp.name, prefix)
      Vue.component(newName, customComp);
    })
    ele.install(Vue, options)
  }
})