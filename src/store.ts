import {action,  computed, observable, runInAction} from "mobx";
import {getSuggestions, NameSuggestion} from "./dadata-service";


export class MobxState {
    @observable firstName = '';
    @observable secondName = '';
    @observable lastName = '';
    @observable firstNameSuggestions: Array<NameSuggestion> = [];

    @computed get fullName() {
        return `${this.firstName || ''} ${this.secondName || ''} ${this.lastName || ''}`
    };

    @action updateFirstName = (value: string) => {
        this.firstName = value;
        this.updateFirstNameSuggestions();
    };

    @action
    updateFirstNameSuggestions = async () => {
        try {
            const result = await getSuggestions(this.firstName);
            runInAction(() => {
                this.firstNameSuggestions = result;
            });
        }
        catch (e) {
           console.log('error ' + e);
        }
    };

    @action choseSuggestion(value: string) {
        this.firstName = value;
        this.firstNameSuggestions = [];
    };

    @action updateSecondName(value: string) {
        this.secondName = value;
    };

    @action updateLastName(value: string) {
        this.lastName = value;
    };
}

export const store = new MobxState();
