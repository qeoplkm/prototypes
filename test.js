<script>
	var leaderboard = document.getElementById("leaderboard");

	function addRow(rank, model, data) {
		var row = document.createElement("tr");
		var rankCell = document.createElement("td");
		var modelCell = document.createElement("td");
		var dataCell = document.createElement("td");

		rankCell.textContent = rank;
		modelCell.textContent = model;
		dataCell.textContent = data;

		row.appendChild(rankCell);
		row.appendChild(modelCell);
		row.appendChild(dataCell);

		leaderboard.appendChild(row);
	}
	
	addRow(4, "name of data4", 35);
</script>
