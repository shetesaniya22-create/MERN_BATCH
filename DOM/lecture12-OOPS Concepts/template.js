//Template pattern ---->The Template Pattern (also called Template Method Pattern) is a behavioral design pattern.
// It defines the structure (template) of an algorithm in a base class, 
// but allows subclasses to change specific steps without changing the overall algorithm.

//SOLID Principal--->
//
class AuthService{
    login(){
        this.validate();
        this.processCredentials();
        this.createSession();
    }

    validate(){
        console.log("Logic related to validation");
        
    }

    processCredentials(){
        throw new Error("Processing need to be implemented");
    }

    createSession(){
        console.log("Logic related to session creating is here");
        
    }
}

class GoogleAuthService extends AuthService{
    processCredentials(){
        console.log("Implementation for credentials processing - google");
        
    }
}

class YahooEmailAuthService extends AuthService{
    processCredentials(){
        console.log("Implementation for credentials processing - Yahoo");
        
    }

}

const googleService=new GoogleAuthService();
googleService.login();

const yahooService=new YahooEmailAuthService();
yahooService.login();


