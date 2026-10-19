// Servidor Express - Projeto #04: Hamburgueria Artesanal Delivery
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3004;

app.get('/api/hamburgueria/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 4,
        sistema: "Hamburgueria Artesanal Delivery",
        categoria: "Gastronomia & FoodService",
        tabela_conectada: process.env.TABELA_ALVO || "pedidos_cozinha",
        parametro_ambiente: process.env.UNIDADE_FRANQUIA || "BURGER_LAB_CENTRO",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #04] Hamburgueria Artesanal Delivery rodando em http://localhost:${PORT}/api/hamburgueria/status`);
});