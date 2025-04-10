export interface Model {
  colors: Color[];
  paramValues: ParamValue[];
}
type Color = 'red' | 'blue' | 'green';

export interface ParamValue {
    paramId: number;
    value: string;
}
  
  