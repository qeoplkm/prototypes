<script>
	var leaderboard = document.getElementById("leaderboard");

	function addRow(rank, name, score) {
		var row = document.createElement("tr");
		var rankCell = document.createElement("td");
		var nameCell = document.createElement("td");
		var scoreCell = document.createElement("td");

		rankCell.textContent = rank;
		nameCell.textContent = name;
		scoreCell.textContent = score;

		row.appendChild(rankCell);
		row.appendChild(nameCell);
		row.appendChild(scoreCell);

		leaderboard.appendChild(row);
	}
	
	addRow(4, "Alice", 70);
</script>
