import React, { Component } from 'react'

export class Fontsection extends Component {
    render() {
        return (
            <div className="bottomcontainerchild1tab-bar-tab font">
                <div className="font-top-row">
                    <select className="font-family-select">
                        <option>Calibri</option>
                        <option>Arial</option>
                        <option>Times New Roman</option>
                        <option>Verdana</option>
                    </select>
                    <select className="font-size-select">
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option selected>11</option>
                        <option>12</option>
                        <option>14</option>
                    </select>
                    <div className="font-size-icons">
                        <sup className="icon Aicon">A</sup>
                        <sub className="icon">A</sub>
                    </div>
                    <div></div>
                    <div></div>
                </div>

                <div className="font-bottom-row">
                    <div className="font-icon bold">B</div>
                    <div className="font-icon italic">I</div>
                    <div className="font-icon underline">U</div>
                    <div className="font-icon strikethrough">abc</div>
                    <div className="font-icon fill">▩</div>
                    <div className="font-icon color">🖌</div>
                    <div className="font-icon clear">A</div>
                </div>

                <div className="font-label">Font</div>
            </div>
        )
    }
}

export default Fontsection