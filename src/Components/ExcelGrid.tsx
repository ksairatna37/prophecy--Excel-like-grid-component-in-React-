import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

interface ExcelGridProps {
    rows?: number;
    cols?: number;
}

const ExcelGrid: React.FC<ExcelGridProps> = ({ rows = 0, cols = 0 }) => {
    const [inputRows, setInputRows] = useState(rows);
    const [inputCols, setInputCols] = useState(cols);
    const [gridData, setGridData] = useState<string[][]>(
        Array.from({ length: rows }, () => Array(cols).fill(""))
    );

    // Sync gridData with inputRows and inputCols
    React.useEffect(() => {
        setGridData((prevGrid) => {
            let newGrid = [...prevGrid];
            if (inputRows > newGrid.length) {
                for (let i = newGrid.length; i < inputRows; i++) {
                    newGrid.push(Array(inputCols).fill(""));
                }
            } else if (inputRows < newGrid.length) {
                newGrid = newGrid.slice(0, inputRows);
            }
            newGrid = newGrid.map((rowArr) => {
                if (inputCols > rowArr.length) {
                    return [...rowArr, ...Array(inputCols - rowArr.length).fill("")];
                } else if (inputCols < rowArr.length) {
                    return rowArr.slice(0, inputCols);
                }
                return rowArr;
            });
            return newGrid;
        });
    }, [inputRows, inputCols]);

    const [selectedCell, setSelectedCell] = useState<{ row: number | null; col: number | null }>({
        row: null,
        col: null,
    });

    // Create a 2D array of refs for all cells
    const cellRefs = useRef<Array<Array<HTMLInputElement | null>>>([]);

    // Update refs array size when grid size changes
    useEffect(() => {
        cellRefs.current = Array.from({ length: inputRows }, (_, r) =>
            Array.from({ length: inputCols }, (_, c) => cellRefs.current[r]?.[c] || null)
        );
    }, [inputRows, inputCols]);

    // Focus the selected cell when it changes
    useEffect(() => {
        if (
            selectedCell.row !== null &&
            selectedCell.col !== null &&
            cellRefs.current[selectedCell.row] &&
            cellRefs.current[selectedCell.row][selectedCell.col]
        ) {
            cellRefs.current[selectedCell.row][selectedCell.col]?.focus();
        }
    }, [selectedCell]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
        const newGrid = gridData.map((r) => [...r]);
        newGrid[row][col] = e.target.value;
        setGridData(newGrid);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, row: number, col: number) => {
        let newRow = row;
        let newCol = col;

        switch (e.key) {
            case "ArrowUp":
                newRow = Math.max(0, row - 1);
                break;
            case "ArrowDown":
                newRow = Math.min(rows - 1, row + 1);
                break;
            case "ArrowLeft":
                newCol = Math.max(0, col - 1);
                break;
            case "ArrowRight":
                newCol = Math.min(cols - 1, col + 1);
                break;
            case "Tab":
                e.preventDefault();
                newCol = (col + 1) % cols;
                if (newCol === 0) newRow = Math.min(rows - 1, row + 1);
                break;
            case "Enter":
                e.preventDefault();
                newRow = Math.min(rows - 1, row + 1);
                break;
            default:
                return;
        }

        setSelectedCell({ row: newRow, col: newCol });
    };

    return (
        <div className="excel-grid">
            <div className="formula-bar-container" style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 8px",
                borderBottom: "1px solid transparent",
                backgroundColor: "transparent",
                justifyContent: "space-between",
            }}>
                {/* Cell Indicator */}
                <div
                    className="cell-indicator"
                    style={{
                        minWidth: "20px",
                        padding: "6px 10px",
                        border: "1px solid #2f684d",
                        borderRadius: "4px",
                        marginRight: "8px",
                        backgroundColor: "#2f684d",
                        fontWeight: "500",
                        textAlign: "center"
                    }}
                >
                    {selectedCell.row !== null && selectedCell.col !== null
                        ? `${String.fromCharCode(65 + selectedCell.col)}${selectedCell.row + 1}`
                        : "00"}
                </div>

                <div style={{gap: "8px", display: "flex", alignItems: "center"}}>
                    <input
                        type="number"
                        className="formula-input"
                        placeholder="Enter Row"
                        min={1}
                        value={inputRows}
                        onChange={e => setInputRows(Math.max(0, Number(e.target.value)))}
                        onBlur={e => setInputRows(Math.max(0, Number(e.target.value)))}
                        style={{
                            maxWidth: "40px",
                            padding: "6px 10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px"
                        }}
                    />
                    <div style={{paddingTop: "6px"}}>
                        <X></X>
                    </div>
                    <input
                        type="number"
                        className="formula-input"
                        placeholder="Enter Column"
                        min={1}
                        value={inputCols}
                        onChange={e => setInputCols(Math.max(0, Number(e.target.value)))}
                        onBlur={e => setInputCols(Math.max(0, Number(e.target.value)))}
                        style={{
                            maxWidth: "40px",
                            padding: "6px 10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px" 
                        }}
                    />
                </div>


            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        {[...Array(inputCols)].map((_, c) => (
                            <th
                                key={c}
                                style={
                                    selectedCell.col === c
                                        ? { backgroundColor: '#2f684d', color: '#222' }
                                        : {}
                                }
                            >
                                {String.fromCharCode(65 + c)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {gridData.map((rowData, r) => (
                        <tr key={r}>
                            <th
                                style={
                                    selectedCell.row === r
                                        ? { backgroundColor: '#2f684d', color: '#222' }
                                        : {}
                                }
                            >
                                {r + 1}
                            </th>
                            {rowData.map((value, c) => (
                                <td key={c}>
                                    <input
                                        type="text"
                                        value={value}
                                        ref={el => {
                                            if (!cellRefs.current[r]) cellRefs.current[r] = [];
                                            cellRefs.current[r][c] = el;
                                        }}
                                        onChange={(e) => handleChange(e, r, c)}
                                        onClick={() => setSelectedCell({ row: r, col: c })}
                                        onKeyDown={(e) => handleKeyDown(e, r, c)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExcelGrid;
