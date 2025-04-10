import type { Model, ParamValue } from '@/entities/models/Model';
import { FeatureEditParam } from '@/features/edit-param';
import type { Param } from '@/shared/lib/utility-types/params';
import React from 'react';

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

  private onParamEdit({paramId, value}: ParamValue) {
    this.setState((prevState) => ({
      paramValues: prevState.paramValues.map((paramValue) =>
        paramValue.paramId === paramId
          ? { ...paramValue, value }
          : paramValue
      ),
    }));
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
            <FeatureEditParam param={param} value={this.getParamValue(param.id)} onChange={this.onParamEdit} />
          </div>
        ))}
      </div>
    );
  }
}

export default ParamEditor;