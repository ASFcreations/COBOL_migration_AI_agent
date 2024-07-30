#How to create a simple COBAL migration AI Agent team

1. Install Flowise - how to guide [here](https://docs.flowiseai.com/getting-started)
2. Get an OpenAI API key (if you want to replicate this example exactly - other LLMs will work as well) - how to guide [here](https://medium.com/data-professor/beginners-guide-to-openai-api-a0420bc58ee5)
3. Create a new Agentflow
4. If you are using OpenAI, add a ChatOpenAI node, else use the appropriate chat node. Select your OpenAI API credential from the "Connect Credential" dropdown, if you haven't created a credential yet, click on "Create New", name the credential and add the API key. Select gpt-4o as the foundation model. Change the temperature (creativity level) to zero
5. Add a supervisor node and connect the chat node to its "Tool Calling Chat Model" variable. Add the below prompt to the supervisor prompt:

> You are a supervisor tasked with managing a conversation between the following workers: {team_members}. Given the following user request, respond with the worker to act next. Each worker will perform a task and respond with their results and status. When finished, respond with FINISH. Select strategically to minimize the number of steps taken.
> 
> First request the COBOL Architect to explain the COBOL code provided by the user. Pass the output from the COBOL Architect worker to the Business Analyst and finally pass the output from the Business Analyst to the Developer worker

6. Add a worker node. Call it COBOL Architect. Link the supervisor output to its "Supervisor" variable. Add the below prompt to the COBOL Architect worker:

> You are an expert in the programming language COBOL. Your job is to review COBOL code provided by the user and write a detail explanation to what the code does functionally.

7. Add another worker node. Call it Business Analyst. Link the supervisor output to its "Supervisor" variable. Add the below prompt to the Business Analyst worker:

> You are a business analyst. Your job is to write a detail user story based on the functional explanation written by team members.

8. Add a final worker node. Call it Node.Js Developer. Link the supervisor output to its "Supervisor" variable. Add the below prompt to the Node.Js Developer worker:

> You are a Node.js developer. Your job is to create APIs based on the user story created by team members.

9. Name and save the Agentflow

10. Go to IBM's cobol-is-fun Github and copy the raw code. Link [here](https://github.com/IBM/cobol-is-fun/blob/master/my-first-program/fxsort.cbl)

11. Run the chat and past the fxsort.cbl code in the chat window and wait for the agents to do their thing!
