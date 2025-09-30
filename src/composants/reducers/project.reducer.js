export function projectReducer(state, action) {
    switch (action.type) {
        case "START_PROJECT":
            return {
                ...state,
                selectedProjectId: null,
            };

        case "ADD_PROJECT":
            const projectId = Math.random();
            const newProject = {
                ...action.payload.data,
                id: projectId,
            };
            return {
                selectedProjectId: undefined,
                projects: [...state.projects, newProject],
            };
        case "CANCEL_PROJECT":
            return {
                ...state,
                selectedProjectId: undefined,
            };
        case "SELECT_PROJECT":
            return {
                ...state,
                selectedProjectId: action.payload.projectId,
            };
        case "DELETE_PROJECT":
            return {
                ...state,
                selectedProjectId: undefined,
                projects: state.projects.filter(
                    (project) => project.id !== state.selectedProjectId
                ),
            };

        default:
            return state;
    }
}
