import React from 'react';

import './css/background.css';

export default function Background(props) {

	return (
		<div id="background-total-wrapper">
  	<div id="background-text" unselectable="on">

        <p>self.prog_idx += 1</p>
        <p>return</p>
<p></p>
<p></p>
<br/>
<br/>
    <p>################################################################################## </p>
    <p># Function: Process_R_Format</p>
    <p># Parameters: the line, index(may not be necessary if we trim the string in</p>
    <p>#             parent function), and current (aka the instruction name)</p>
    <p># Description: This function parses the current line of the input file, seperating</p>
    <p>#              the values into an object interpretation  </p>
    <p>##################################################################################        </p>
    <p>def Process_R_Format(self, line, i, current):</p>
        <p>&emsp;instr = current # log the current as the instruction</p>
        <p>&emsp;current = ""</p>
<p></p>
        <p>&emsp;while (line[i] == " "):</p>
            <p>i += 1</p>
<p>        </p>
        <p>&emsp;if (line[i] == "S" or line[i] == "F" or line[i] == "L" or line[i] == "X" ): # Write Register</p>
            <p>&emsp;&emsp;rd_num, i = self.Process_Register(line, i)</p>
        <p>&emsp;else:</p>
            <p>&emsp;&emsp;print "Error: malformed instruction =>", line</p>
            <p>&emsp;&emsp;sys.exit()</p>
            <p></p>
        <p>&emsp;while(i != len(line) and (line[i] == " " or line[i] == ",")):</p>
            <p>&emsp;&emsp;i += 1</p>
        <p>&emsp;if (i == len(line) and instr == "BR"):</p>
            <p>&emsp;&emsp;rn_num = -1</p>
            <p>&emsp;&emsp;rm_num = -1</p>
        <p>&emsp;else:</p>
            <p>&emsp;&emsp;if (line[i] == "S" or line[i] == "F" or line[i] == "L" or line[i] == "X" ): # Operand 1 Register</p>
                <p>&emsp;&emsp;rn_num, i = self.Process_Register(line, i)</p>
            <p>&emsp;&emsp;else:</p>
                <p>&emsp;&emsp;&emsp;print "Error: malformed instruction =>", line</p>
                <p>&emsp;&emsp;&emsp;sys.exit()</p>
<p></p>
            <p>&emsp;while(line[i] == " " or line[i] == ","):</p>
                <p>&emsp;&emsp;i += 1</p>
<p></p>
<p></p>
            <p>&emsp;if (line[i] == "S" or line[i] == "F" or line[i] == "L" or line[i] == "X" ): # Operand 2 Register</p>
                <p>&emsp;&emsp;rm_num, i = self.Process_Register(line, i)</p>
            <p>&emsp;else:</p>
                <p>&emsp;&emsp;print "Error: malformed instruction =>", line</p>
                <p>&emsp;&emsp;sys.exit()</p>
<p></p>
        <p>&emsp;&emsp;opcode = self.instr_def['R-Format'][instr]</p>
        <p>&emsp;&emsp;self.Make_R_Format(instr, opcode, rm_num, rn_num, rd_num) # insert new object in instruction array with line serving as index</p>
        <p>&emsp;&emsp;return</p>
<p></p>
<br/>
<br/>
    <p>##################################################################################</p>
    <p># Function: Make_R_Format</p>
    <p># Parameters: the parsed values provided by the parent function</p>
    <p># Description: This function sorts the parameters and molds them into a more usable</p>
    <p>#              object format. This format makes actual instruction implementations</p>
    <p>#              more trivial.   </p>
    <p>################################################################################## </p>
    <p>def Make_R_Format(self, _name, _opcode, _rm, _rn, _rd):</p>
        <p>&emsp;self.program.append('name': _name, 'interpreted': 'opcode': int(_opcode), 'Rm': int(_rm), 'Rn': int(_rn), 'Rd': int(_rd)}})   </p>
        <p>&emsp;self.prog_idx += 1</p>
        <p>&emsp;return</p>
<p></p>
    <p>##################################################################################   </p>
    <p># Function: Process_CB_Format                         </p>
    <p># Parameters: the line, index(may not be necessary if we trim the string in                         </p>
    <p>#             parent function), and current (aka the instruction name) </p>
    <p># Description: This function parses the current line of the input file, seperating                 </p>
    <p>#              the values into an object interpretation                 </p>
    <p>##################################################################################                                 </p>
    <p>def Process_CB_Format(self, line, i, current):</p>
        <p>&emsp;instr = current # log the current as the instruction                                    </p>
        <p>&emsp;current = ""</p>
        <p>&emsp;i += 1 # we are still on the instr                                                             </p>
        <p>&emsp;while (line[i] == ' '):</p>
            <p>&emsp;&emsp;i += 1</p>
<p></p>
        <p>&emsp;if (line[i] == "S" or line[i] == "F" or line[i] == "L" or line[i] == "X" ): # Operand 2 Register</p>
            <p>&emsp;&emsp;rt_num, i = self.Process_Register(line, i)</p>
        <p>&emsp;else:</p>
            <p>&emsp;&emsp;print "Error: malformed instruction =>", line</p>
            <p>&emsp;&emsp;sys.exit()</p>
<p></p>
        <p>&emsp;while (line[i] == " " or line[i] == ","):</p>
            <p>&emsp;&emsp;i += 1</p>
<p>        </p>
        <p>&emsp;if (i == len(line)):</p>
            <p>&emsp;&emsp;print "Error: malformed instruction =>", line</p>
            <p>&emsp;&emsp;sys.exit()</p>
        <p>&emsp;else:</p>
            <p>&emsp;&emsp;while(line[i].isalpha()): # these loops append the digits into a temp variable                          </p>
                <p>&emsp;&emsp;&emsp;current += line[i]</p>
                <p>&emsp;&emsp;&emsp;i += 1</p>
<p></p>
            <p>&emsp;label = current</p>
            <p>&emsp;label_line = self.Find_Label(label)</p>
            <p>&emsp;opcode = self.instr_def['CB-Format'][instr]</p>
            <p>&emsp;self.Make_CB_Format(instr, opcode, rt_num, label, label_line) # insert new object in instruction array with line serving as index              </p>
        <p>&emsp;return</p>
    <p></p>

    <p>##################################################################################                        </p>
    <p># Function: Make_CB_Format                                                                                </p>
    <p># Parameters: the parsed values provided by the parent function                                      </p>
    <p># Description: This function sorts the parameters and molds them into a more usable        </p>
    <p>#              object format. This format makes actual instruction implementations</p>
    <p>#              more trivial.                                                                                                  </p>
    <p>##################################################################################</p>
    <p>def Make_CB_Format(self, _name, _opcode, _rt, _label, _label_line):</p>
        <p>&emsp;self.program.append('name': _name, 'interpreted': 'opcode': int(_opcode), 'Rt': int(_rt), 'label': _label, 'label_line': _label_line}})</p>
        <p>&emsp;self.prog_idx += 1</p>
        <p>&emsp;return</p>
<p>    </p>

    <p>##################################################################################</p>
    <p># Function: execute</p>
    <p># Parameters: none</p>
    <p># Description: This is possibly the lynchpin function of this application. It is</p>
    <p>#              called to execute the current line of the application and move</p>
    <p>#              the program forward.</p>
    <p>##################################################################################</p>
    <p>def execute(self):</p>
        <p>&emsp;current_instr = self.program[self.current_line]</p>
        <p>&emsp;instr_name = current_instr['name']</p>
        <p>&emsp;interpreted_instr = current_instr['interpreted']</p>
<p></p>
        <p>&emsp;print " " # seperator</p>
        <p>&emsp;print "Executing Line: " + self.str_current()</p>
<p></p>
        <p>&emsp;# NOTE: if the instruction is branching, make sure to increment the current_line variable</p>
<p>        </p>
        <p>&emsp;# I-Format</p>
        <p>&emsp;if (instr_name == 'ADDI'):</p>
            <p>&emsp;&emsp;Rd = interpreted_instr['Rd']</p>
            <p>&emsp;&emsp;Rn = interpreted_instr['Rn']</p>
            <p>&emsp;&emsp;immediate = interpreted_instr['imm']</p>
            <p>&emsp;&emsp;print "Value of Write Register before execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;print "Evaluating interpreted expression:", self.RFILE[Rn], "+", immediate</p>
            <p>&emsp;&emsp;self.RFILE[Rd] = self.RFILE[Rn] + immediate	if Rd != 31 else 0</p>
            <p>&emsp;&emsp;print "Value of Write Register after execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;self.current_line += 1</p>
<p></p>
        <p>&emsp;if (instr_name == 'ADDIS'):</p>
            <p>&emsp;&emsp;Rd = interpreted_instr['Rd']</p>
            <p>&emsp;&emsp;Rn = interpreted_instr['Rn']</p>
            <p>&emsp;&emsp;immediate = interpreted_instr['imm']</p>
            <p>&emsp;&emsp;print "Value of Write Register before execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;print "Evaluating interpreted expression:", self.RFILE[Rn], "+", immediate</p>
            <p>&emsp;&emsp;self.RFILE[Rd] = self.RFILE[Rn] + immediate	if Rd != 31 else 0</p>
            <p>&emsp;&emsp;print "Value of Write Register after execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;self.set_flags(self.RFILE[Rd])</p>
            <p>&emsp;&emsp;print "Flags set by intruction:", self.flags</p>
            <p>&emsp;&emsp;self.current_line += 1</p>
<p>            </p>
        <p>&emsp;elif (instr_name == 'SUBI'):</p>
            <p>&emsp;&emsp;Rd = interpreted_instr['Rd']</p>
            <p>&emsp;&emsp;Rn = interpreted_instr['Rn']</p>
            <p>&emsp;&emsp;immediate = interpreted_instr['imm']</p>
            <p>&emsp;&emsp;print "Value of Write Register before execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;print "Evaluating interpreted expression:", self.RFILE[Rn], "-",	immediate</p>
            <p>&emsp;&emsp;self.RFILE[Rd] = self.RFILE[Rn] + immediate	if Rd != 31 else 0</p>
            <p>&emsp;&emsp;print "Value of Write Register after execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;self.current_line += 1</p>
<p></p>
        <p>&emsp;elif (instr_name == 'SUBIS'):</p>
            <p>&emsp;&emsp;Rd = interpreted_instr['Rd']</p>
            <p>&emsp;&emsp;Rn = interpreted_instr['Rn']</p>
            <p>&emsp;&emsp;immediate = interpreted_instr['imm']</p>
            <p>&emsp;&emsp;print "Value of Write Register before execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;print "Evaluating interpreted expression:", self.RFILE[Rn], "-",    immediate</p>
            <p>&emsp;&emsp;self.RFILE[Rd] = self.RFILE[Rn] + immediate	if Rd != 31 else 0</p>
            <p>&emsp;&emsp;print "Value of Write Register after execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;self.set_flags(self.RFILE[Rd])</p>
            <p>&emsp;&emsp;print "Flags set by intruction:", self.flags</p>
            <p>&emsp;&emsp;self.current_line += 1</p>
<p>            </p>
        <p>&emsp;elif (instr_name == 'ANDI'):</p>
            <p>&emsp;&emsp;Rd = interpreted_instr['Rd']</p>
            <p>&emsp;&emsp;Rn = interpreted_instr['Rn']</p>
            <p>&emsp;&emsp;immediate = interpreted_instr['imm']</p>
            <p>&emsp;&emsp;print "Value of Write Register before execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;print "Evaluating interpreted expression:", self.RFILE[Rn], "&",    immediate</p>
            <p>&emsp;&emsp;self.RFILE[Rd] = self.RFILE[Rn] & immediate	if Rd != 31 else 0</p>
            <p>&emsp;&emsp;print "Value of Write Register after execution:", self.RFILE[Rd]</p>
            <p>&emsp;&emsp;self.current_line += 1</p>

	            	</div>
	            	</div>
            	
	)
}