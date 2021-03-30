import { Home} from '../pages/Home';
import { Shop } from '../pages/Shop';
import { SignIn } from '../pages/Auth/SignIn';
import { SignUp } from '../pages/Auth/SignUp';
import {PROJECT_NAVIGATION} from "../interfaces/apiEntities";
import {Account} from "../pages/Account";

export default [
    {
        path: PROJECT_NAVIGATION.ACCOUNT,
        component: Account,
        exact: true,
    },
    {
        path: PROJECT_NAVIGATION.MYAUTO,
        component: Shop,
        exact: true,
    },
    {
        path: PROJECT_NAVIGATION.SIGN_UP,
        component: SignUp,
        exact: true,
    },
    {
        path: PROJECT_NAVIGATION.SIGN_IN,
        component: SignIn,
        exact: true,
    },
    {
        path: PROJECT_NAVIGATION.LANDING,
        component: Home,
        exact: true,
    },
];