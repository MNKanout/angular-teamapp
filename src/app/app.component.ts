import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // States
  newMemberName ='';
  members: string[] = [];
  errorMessage = "";
  numberOfTeams: number | ""  = "";
  teams: string[][] = []; // Array of string arrays.

  onInput(member: string){
    this.newMemberName = member;
  }
  onNumberOfTeamsInput (value: string) {
    this.numberOfTeams = Number(value);
  }
  addMember(){
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty"
      return;
    }
      this.members.push(this.newMemberName);
      this.newMemberName = "";
      this.errorMessage = "";
  }
  generateTeams() {
    const allMembers = [...this.members]
    // Number of teams has to be positive number 
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      return
    }
    while (allMembers.length) {
    // Create an array for each team.

      for (let i = 0; i < this.numberOfTeams; i++) {
        // Generate random index to select a random element.
        const randomIndex = Math.floor(Math.random()*allMembers.length)

        // Return and remove the random array element. 
        const member = allMembers.splice(randomIndex,1)[0] // Select the first element.

        // Break if no members left.
        if (!member) break;

        // Check if the team exists in the teams array.
        if (this.teams[i]) {
          // Add the new member to the existing array.
          this.teams[i].push(member)
        } else {
          // Create a new array, and add the member to it.
          this.teams[i] = [member]
        }
      }
    }
    this.members = [];
    this.numberOfTeams = "";
    console.log(this.teams)
  }
}
