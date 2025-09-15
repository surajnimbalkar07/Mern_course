/*
Voting Problem 

Goal:
Count valid votes for each party.
If a voter votes more than once, only the first vote counts.

First line: N → number of votes.

Next N lines: voterId partyName.

6
123 BJP
124 Congress
123 AAP
125 TMC
126 BJP
127 Congress


BJP 2
Congress 2
TMC 1

This shows first-vote-only counting and lexicographic order.
*/

const votes = [
  ["123", "BJP"],
  ["124", "Congress"],
  ["123", "AAP"],
  ["125", "TMC"],
  ["126", "BJP"],
  ["127", "Congress"]
];
function countVotes(votes) {

let voterMap=new Map();
let partyCount=new Map();

for(let i=0;i<votes.length;i++){
  const[id,party]=votes[i];
  if(!voterMap.has(id)){
    voterMap.set(id,party)
    partyCount.set(party,(partyCount.get(party)||0)+1)
  }
}

for(let c of [...partyCount.entries()].sort((a, b) => a[0].localeCompare(b[0])) ){
console.log(c.join(" "))             //Map methods like keys(), values(), and entries() return iterators,
                                     //so to use array methods (sort, map, filter, …) you must wrap them with Array.from() or [... ]:
}


/* another way
let Ans=[]
for(let [key,value]of partyVotes.entries())
{
  Ans.push([key,value])
}
Ans.sort()
for(let i=0;i<Ans.length;i++)
{
  console.log(Ans[i][0]+" "+Ans[i][1])
}
*/
}
countVotes(votes)


/*
Notes:
why we use localeCompare here and not arr.sort((a,b)=>a-b)
-------------------------------------------------------------
.sort((a, b) => a[0].localeCompare(b[0]))

a and b are each pair arrays: e.g. ['BJP', 2].

a[0] is the party name ('BJP'), b[0] is the other party name.

localeCompare compares the two strings alphabetically and returns:

negative if a[0] comes before b[0]

0 if equal

positive if after.
------------------------------------------------------------
other way:

arr.sort((a, b) => {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
});
-------------------------------------------------------------

a - b only for numbers, not for strings or arrays.
*/

