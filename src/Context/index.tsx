import React, { ReactNode } from 'react'

const AppContext: any = React.createContext({})

const { Provider } = AppContext

interface IAction {
    type: string
    value: any
}

interface IState {
    something: boolean
}

const initialState = {
    something: true,
}

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        default:
            return state
    }
}

const useState = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return {
        state,
        dispatch,
    }
}

interface IAppProviderProps {
    children?: ReactNode
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
    const { state, dispatch } = useState()

    const data = React.useMemo(() => {
        return {
            state,
            userDispatch: dispatch,
        }
    }, [state])

    return <Provider value={data}>{children}</Provider>
}

interface IAppContextProps {
    state: IState
}

const useAppContext = () => {
    const context = React.useContext<IAppContextProps>(AppContext)

    if (!context) {
        throw new Error(
            'Compound components cannot be accessed outside the user context',
        )
    }
    return context
}

export { AppProvider, useAppContext }
