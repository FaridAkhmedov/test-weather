import App from "./App.jsx";
import { connect } from "react-redux";
import api, { KEMEROVO } from "../../api";
import { setupData } from "../../store";

const state = state => ({
  currently: state.currently,
  daily: state.daily
});

const dispatch = dispatch => ({
  fetch: async () => dispatch(setupData(await api.get(KEMEROVO).json()))
});

export default connect(state, dispatch)(App);
