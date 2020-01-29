import React from 'react';
import { Header } from 'semantic-ui-react';

import Card from '../../Card/Components/cardView';

import Loading from '../../Loader';

import './search.css';

const SearchView = props => {
  return (
    <div className="search-container">
      <Header as="h3" block id="search-result">
        Search results
      </Header>
      {props.search !== '' ? (
        <>
          {props.loading ? (
            <Loading />
          ) : props.questions && props.questions.length > 0 ? (
            props.questions.map(question => (
              <Card
                key={question._id}
                tags={question.tags}
                questionID={question._id}
                q_title={question.q_title}
                questioner={question.questioner}
                date={
                  question && question.date ? question.date.substr(0, 10) : ''
                }
              />
            ))
          ) : (
            <div id="search-result">No result found</div>
          )}
        </>
      ) : (
        <div id="search-result">No result found</div>
      )}
    </div>
  );
};

export default SearchView;
