export function projectReducer(state, action) {
    if (action.type === "START_PROJECT") {
        return {
            ...state,
            selectedProjectId: null,
        };
    } else if (action.type === "ADD_PROJECT") {
        const projectId = Math.random();
        const newProject = {
            ...action.payload.data,
            id: projectId,
        };
        return {
            selectedProjectId: undefined,
            projects: [...state.projects, newProject],
        };
    } else if (action.type === "CANCEL_PROJECT") {
        return {
            ...state,
            selectedProjectId: undefined,
        };
    } else if (action.type === "SELECT_PROJECT") {
        return {
            ...state,
            selectedProjectId: action.payload.projectId,
        };
    } else if (action.type === "DELETE_PROJECT") {
        return {
            ...state,
            selectedProjectId: undefined,
            projects: state.projects.filter(
                (project) => project.id !== state.selectedProjectId
            ),
        };
    }
    return state;
}
