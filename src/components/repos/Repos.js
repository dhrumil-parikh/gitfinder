import React,{useContext} from 'react';
import Repoitem from './Repoitem'
import GithubContext from "../../context/github/githubContext";


const Repos = () => {
    const githubContext = useContext(GithubContext);
    const { repos } = githubContext;
    return repos.map(repo =>
        <Repoitem repo={repo} key={repo.id} />);
}



export default Repos