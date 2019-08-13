declare module "app/core/controllers/all" {
  let json: any;
  export {json};
}

declare module "app/core/routes/all" {
  let json: any;
  export {json};
}

declare module "app/core/services/all" {
  let json: any;
  export default json;
}

declare module "app/core/utils/ConfigProvider" {
  function provideTheme(any): any
  export {provideTheme}
}