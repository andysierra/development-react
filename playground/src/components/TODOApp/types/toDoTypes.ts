export interface ToDo{
  key           : number,
  title         : string,
  description   : string,
  dateCreated   : Date,
  dateModified  : Date,
  status?       : 'pending' | 'done'
}