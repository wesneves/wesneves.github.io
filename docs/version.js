<script>
    async function fetchRVersion() {
        try {
            // Dividimos a URL para evitar que o Quarto tente validá-la como arquivo local
            const part1 = "https://r-pkg";
            const part2 = ".org/api/v1/r-version";
            const response = await fetch(part1 + part2);
            const data = await response.json();
            if (data && data.version) {
                document.getElementById('r-version').innerText = 'R ' + data.version;
            }
        } catch (error) {
            console.error('Erro ao buscar versão do R:', error);
            document.getElementById('r-version').innerText = 'R 4.4.0+'; 
        }
    }
    fetchRVersion();
</script>
