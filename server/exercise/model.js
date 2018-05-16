function Exercise() {
    this.Users = [];
    this.Logs = [];
    
    this.Login = (name) => {
        if(this.Users.some(x => x.Name == name)){}
        else{
            this.Users.push({Name: name,Bio: '',Pic: 'https://upload.wikimedia.org/wikipedia/en/d/df/Smiley_face_2.jpg'})
        }
    }

    this.ReturnUser = (name) => {
        return this.Users[this.Users.findIndex(x => x.Name == name)];
    }

    this.SetBio = (name, bio) => {
        this.Users[this.Users.findIndex(x => x.Name == name)].Bio = bio;
    }

    this.SetPic = (name, pic) => {
        this.Users[this.Users.findIndex(x => x.Name == name)].Pic = pic;
    }

    
    this.AddLog = (name, log) => {
        this.Logs.push({Name: name, Log: log})
    }
    
    this.GetLogs = (name) => {
        var logs = [];
        for(i in this.Logs){
            if(this.Logs[i].Name==name){
                logs.push(this.Logs[i].Log);
            }
        }
        return logs;
    }
    

    this.FilterUsers = (text) => {
        var users = this.Users.filter(x => x.Name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, 10);
        var names = [];
        for(var o in users) {
            names.push(users[o].Name);
          }
        return names;
    }
}

module.exports = Exercise;