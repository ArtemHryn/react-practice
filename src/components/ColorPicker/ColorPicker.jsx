// import { Component } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';
import { useState } from 'react';

export const ColorPicker = ({ options }) => {
  const [index, setIndex] = useState(0);

  const makeOptionClassName = id => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': id === index,
    });
  };

  const { label, color } = options[index];
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p style={{ color: color }}>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => {
          return (
            <button
              key={label}
              className={makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => setIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

// export class oldColorPicker extends Component {
//   state = {
//     activeOptionInd: 1,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionInd: index });
//   };

//   makeOptionClassName = index => {
//     return classNames('ColorPicker__option', {
//       'ColorPicker__option--active': index === this.state.activeOptionInd,
//     });
//   };
//   render() {
//     const { activeOptionInd } = this.state;
//     const { colors } = this.props;
//     const { label, color } = colors[activeOptionInd];

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p style={{ color: color }}>Выбран цвет: {label}</p>
//         <div>
//           {this.props.colors.map(({ label, color }, index) => {
//             return (
//               <button
//                 key={label}
//                 className={this.makeOptionClassName(index)}
//                 style={{
//                   backgroundColor: color,
//                 }}
//                 onClick={() => this.setActiveIdx(index)}
//               ></button>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
