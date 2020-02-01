/*

return (
    <ApolloProvider client={client}>
      <Subscription
        subscription={isIn ? PL_WITH_LOVE_SUB : PL_SUB}
        variables={
          isIn
            ? {
              userId: authState.user.uid
            }
            : null
        }
      >
        {({ data, loading, error }) => {
          if (loading) return "loading...";
          if (error) return error.message;

          return (
            <ul className="pl-list">
              {data.programming_language.map(pl => {
                const { name, vote_count } = pl;

                let content = null;
                if (isIn) {
                  const isLoved =
                    pl.lovedLanguagesByname_aggregate.aggregate.count === 1;
                  if (isLoved) {
                    content = (
                      <Mutation mutation={UNLOVE_MUTATION} variables={{ name }}>
                        {unlove => <button onClick={unlove}>Unlove</button>}
                      </Mutation>
                    );
                  } else {
                    content = (
                      <Mutation mutation={LOVE_MUTATION} variables={{ name }}>
                        {love => <button onClick={love}>Love</button>}
                      </Mutation>
                    );
                  }
                }

                return (
                  <li key={name}>
                    <span>{`${name} - ${vote_count}`}</span>
                    <span>
                      <Mutation mutation={VOTE_MUTATION} variables={{ name }}>
                        {vote => <button onClick={vote}>Vote</button>}
                      </Mutation>
                      {content}
                    </span>
                  </li>
                );
              })}
            </ul>
          );
        }}
      </Subscription>
    </ApolloProvider>
  );
}
*/