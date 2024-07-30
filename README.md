![Flowise COBOL Migration AI Agent](/cobol_migration_agent.png)

# COBOL-Migration-AI-Agent

This repo is the output of a COBOL Migration experiment built to support a Linkedin article. [Rodrigo Soares Linkedin](https://www.linkedin.com/in/rodsoares/)

This Node.JS Express API replicates a COBOL application functionality. The entire process, including understanding the COBOL code, writing an user story for a Node.js API and creating the API itself was done using AI Agents exclusively.

Instruction on how to build the agents in the AI_agents_instructions folder.

This API replicates the functionality of a COBOL demo application from IBM. Github repo [here](https://github.com/IBM/cobol-is-fun/tree/master/my-first-program)

- Run the server with the command: node app.js
- Using curl or Postman send a POST request to http://localhost:3000/merge-and-sort

The API will merge and sort the 3 files named FXLIST and output a FXLIST-SORTED.txt file that is identical to IBM's my-first-program COBOL application.