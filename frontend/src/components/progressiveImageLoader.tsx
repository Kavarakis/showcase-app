import React from 'react';
type inputData = {
  src: string;
  placeholder: string;
  delay: number;
  className: string;
};
export default class ProgressiveImageLoader extends React.Component<
  inputData & {},
  any
> {
  constructor(props: inputData) {
    super(props);
    this.state = { ...this.props };
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ placeholder: this.props.src });
    }, this.state.delay);
  }
  render(): React.ReactNode {
    return (
      <div>
        <img
          src={this.state.placeholder}
          className={this.state.className}
          alt=""
        />
      </div>
    );
  }
}
