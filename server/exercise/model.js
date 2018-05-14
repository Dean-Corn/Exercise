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

}

module.exports = Exercise;