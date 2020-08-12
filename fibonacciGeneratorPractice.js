var sequence = [];
if (n <= 0) {
sequence = [];
}

else if (n === 1) {
sequence = [0];
}

else if (n <= 2) {
sequence = [0 ,1];
}

else if (n > 2) {
sequence = [0 ,1];
for (var i = 0; i<n; i++) {

   sequence.push(sequence[i]+sequence[i+1]);

  }
  sequence.pop();
  sequence.pop();
}

return sequence;
