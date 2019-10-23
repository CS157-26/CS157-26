# CS157A-26
### **Production Incident Ticket Management - Team 26**
### Members:
* Zackary Finer
* Antoine Ngu
* Dale Christian Seen

## Project Proposal Document (Google Docs)
* [Link](https://docs.google.com/document/d/1IcwN95EiWhgI9mjhy-N-dl5jltKNnzZ_7_KFy-NgPNA/edit)

## Project Requirements Document (Google Docs)
* [Link](https://docs.google.com/document/d/1WjnBIeTOdjGHbgXIvnqPiM5VLXVKKPNnMIDWtfvNJ5E/edit)

## Project Data Model and Relations Diagram (Google Docs)
* [Descriptions](https://docs.google.com/document/d/1Cudp2DrIlfLpgf_h53ZWR6-MN59dJu736z1aLrOjS34/edit?usp=sharing)
* [Diagram](https://docs.google.com/document/d/1dBSCm4tD__C97Zo-LxzpJmSs1hlT97w3-D4Py34ELN4/edit?usp=sharing)

## Entity/Relationship Diagram 2.0 (Google Docs)
* [Descriptions](https://docs.google.com/document/d/1wutAxAXTAQ6OScv0VVzGJzJALwWHV1B3L0BqK03Zn88/edit)
* [Diagram](https://docs.google.com/document/d/1Mi5HKfvgGUl_YHR7PPKqtcaCecwbFPFk9v90KODSMEc/edit)

# How to run the application
**NOTE:** You must have a MYSQL v.8 database server running with user: 'developer' and password: '123456' with database 'hw1' containing a table titled 'students' with String attributes 'first_name' 'last_name' 'major' 'year'. 

1. Open a terminal and cd to the git directory.
2. Enter "npm install" to install server dependencies.
3. After server dependecy installation, enter "cd client" and then enter "npm install" to install client dependencies.
4. After client dependency installation, enter "cd .." to return to server directory.
5. Enter "npm run launch" to run the server. 

# How to pickup a user story and get it merged:
### Picking up user stories:
1. Create a branch that branches off 'development' branch. Name it the user story's ID. Ex.: '012'
2. Create a pull request and set your branch to merge with the 'development' branch.
3. Title your pull request with the user story's title. ex.: "000: Code Slice"
4. Assign yourself to the pull request, set appropriate labels ("Frontend", "Backend", "Bug", etc..), set the project to "Main Project Board", and create pull request.
5. Go to main project board and delete the corresponding note of your user story.
6. Work on your user story.

### Requesting review and merge:
1. Once you are done and have committed everything into your local branch, merge the development branch into your local branch and fix merge conflicts if any.
2. Assign a reviewer to your pull request and let them know via slack that you've requested their review.
2. Reviewer will review your code. If they approve, they will merge the code to 'development' branch. If they request changes, add those changes, push them, and request again. Repeat until approved.

**NOTE:** In the event of the development branch being updated while you're still waiting for your pull request to be reviewed, you need to merge the updated development branch into your branch and fix merge conflicts if any.