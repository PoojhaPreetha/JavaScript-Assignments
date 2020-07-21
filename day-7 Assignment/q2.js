console.log("OOPs");
class User{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
    }
    login()
    {
        console.log(`${name} has logged in`);
    }
    logout()
    {
        console.log(`${name} has logged out`);
    }
}
let user1 =new User ("Poojha",20,"poo@gmail.com");
let user2 =new User ("Preetha",22,"pre@gmail.com");
console.log(user1);
user1.login();
user1.logout();
console.log(user2);
user2.login();
user2.logout();
class Moderator extends User{
    addCoins(l)
    {
        this.l++;
        console.log(`${name} has ${l} coins`);
        return this;
    }
    removeCoins(l)
    {
        this.l--;
        console.log(`${name} has ${l} coins`)
    }
}
let users = [user1,user2];
users.forEach(el=>{
    console.log(el)
});
let mod1 = new Moderator("Vignesh",35,"vig@gmail.com");
mod1.addCoins(user1);
mod1.addCoins(user1);
mod1.addCoins(user1);
mod1.removeCoins(user1);
console.log(mod1);
class Admin extends Moderator{
    addCourse(users,course)
    {
        this.users=users;
        this.course=course;
        console.log(users);
    }
    delteCourse(users,course)
    {
        this.users=users;
        this.course=course;
        users.course.pop(course);
        console.log(users);
    }
}
let ad1 = new Admin("vijay",50,"vi@gmail.com");
ad1.addCourse(user1,"Python");
console.log(ad1.user1);
