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

const MODE_REPLACE = "replace";
const MODE_APPEND = "append";

const defaultOpts = {
  prefix: '',
  mode: MODE_APPEND
}

const getOpt = (params) => {
  if(typeof params === 'string'){
    return {...defaultOpts, ...{prefix: params}}
  }
  if(typeof params === 'object'){
    return {...defaultOpts, ...params}
  }
  return defaultOpts
};

const renameCompoent = (elName, {mode, prefix}) => {
  if(mode === MODE_APPEND){
    return `${prefix}${elName}`
  }
  if(mode === MODE_REPLACE){
    return elName.replace(ELEMENT_COMPONET_PREFIX, prefix);
  }
  return elName;
}
  

export const createElementPlusCompAlias = (params) => {
  const opt = getOpt(params);
  return {
    install: (app, options) => {
      const components = Object.keys(ele)
        .filter((k) => isComponet(k))
        .map((k) => ele[k]);
      components.forEach((c) => {
        const customComp = Object.assign({}, c);
        const newName = renameCompoent(customComp.name, opt);
        app.component(newName, customComp);
      });
      ele.install(app, options);
    },
  };
};
