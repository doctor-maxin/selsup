import React, { type ChangeEvent } from 'react';

type Color = 'red' | 'blue' | 'green';

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}
interface ParamValue {
  paramId: number;
  value: string;
}
interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paramValues: props.model.paramValues,
    };

    this.getModel = this.getModel.bind(this);
    this.onParamEdit = this.onParamEdit.bind(this);
    this.getParamValue = this.getParamValue.bind(this);
  }

  public getModel(): Model {
    return {
      ...this.props.model,
      paramValues: this.state.paramValues,
    };
  }

  private onParamEdit(e: ChangeEvent<HTMLInputElement>, param: Param) {
    if (param.type !== 'string') {
      throw new Error('EditParam: paramType not implemented: ' + param.type);
    }

    this.setState((prevState) => {
      if (prevState.paramValues.some((paramValue) => paramValue.paramId === param.id)) {
        return {
          paramValues: prevState.paramValues.map((paramValue) =>
            paramValue.paramId === param.id
             ? {...paramValue, value: e.target.value  }
              : paramValue
          ),
        };
      }
      return {
        paramValues: [
          ...prevState.paramValues,
          {
            paramId: param.id,
            value: e.target.value,
          },
        ]
      }
    });
  };

  private getParamValue(paramId: number): string {
    return (
      this.state.paramValues.find(
        (paramValue) => paramValue.paramId === paramId
      )?.value || ''
    );
  }

  render() {
    return (
      <div className='param-editor'>
        {this.props.params.map((param) => (
          <div key={param.id} className='param-editor-line'>
            <label>{param.name}</label>
            <input type="text" value={this.getParamValue(param.id)} onChange={(e) => this.onParamEdit(e, param)} />
          </div>
        ))}
      </div>
    );
  }
}

export default ParamEditor;