import React from "react";
import { useDispatch } from "react-redux";
import { downvoteQuote, removeQuote, upvoteQuote } from "./quotesSlice";

function QuoteCard({ quote }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={() => dispatch(upvoteQuote(quote.id))} >
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => dispatch(downvoteQuote(quote.id))}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger" onClick={() => dispatch(removeQuote(quote.id))}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;