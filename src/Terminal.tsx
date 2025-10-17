import React, { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { useTerminal } from './useTerminal';
import './Terminal.css';

export const Terminal: React.FC = () => {
  const { history, currentInput, setCurrentInput, executeCommand, clearTerminal } = useTerminal();
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (currentInput.trim() === 'clear') {
        clearTerminal();
        setCurrentInput('');
      } else {
        if (currentInput.trim()) {
          setCommandHistory(prev => [...prev, currentInput.trim()]);
        }
        executeCommand(currentInput);
        setHistoryIndex(-1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn close"></span>
          <span className="btn minimize"></span>
          <span className="btn maximize"></span>
        </div>
        <div className="terminal-title">ROBERTO NICOLAU - TERMINAL V1.0</div>
      </div>
      
      <div 
        className="terminal-body" 
        onClick={handleTerminalClick}
        ref={terminalRef}
      >
        <div className="terminal-content">
          {history.map((entry, index) => (
            <div key={index} className="terminal-entry">
              {entry.command && (
                <div className="command-line">
                  <span className="prompt">roberto@portfolio:~$</span>
                  <span className="command">{entry.command}</span>
                </div>
              )}
              {entry.output && (
                <pre className="command-output">{entry.output}</pre>
              )}
            </div>
          ))}
          
          <div className="input-line">
            <span className="prompt">roberto@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="command-input"
              autoComplete="off"
              spellCheck={false}
            />
            <span className="cursor">|</span>
          </div>
        </div>
      </div>
    </div>
  );
};