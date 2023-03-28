// El objeto form no debe estar tipado, siempre object

export interface Field {
  value   : string|number|object|undefined|null,
  type    : string,
  regex?  : RegExp,
  required: boolean,
  min?    : number,
  max?    : number,
  size?   : number
}