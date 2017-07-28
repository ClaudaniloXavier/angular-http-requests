CREATE OR REPLACE FUNCTION public.InserirHeroi(pNome         public.heroi."nomeHeroi"%TYPE,
                                               pIdade        public.heroi.idade%TYPE,
                                               pIdCor        public.heroi."idCor"%TYPE,
                                               pIdSuperPoder public.heroi."idSuperPoder"%TYPE
)
    RETURNS JSON AS $$
/*
Documentação
Arquivo Fonte.....: Heroi.sql
Objetivo..........: Inserir Heroi
Autor.............: Forek
Data..............: 26/07/2017
Ex................:
                    SELECT * FROM public.InserirHeroi('SuperMan', 33, 1, 1)
*/

DECLARE vRETEXCEPTION VARCHAR(1000);
        vReturnId     VARCHAR(20);

BEGIN

    INSERT INTO public.heroi (
        "nomeHeroi",
        idade,
        "idCor",
        "idSuperPoder"
    ) VALUES (
        pNome,
        pIdade,
        pIdCor,
        pIdSuperPoder)
    RETURNING id
        INTO vReturnId;

    RETURN '{"result": "Heroi Cadastrado com sucesso!", "ID":"' || vReturnId || '", "code":0}';

    EXCEPTION WHEN OTHERS
    THEN
        GET STACKED DIAGNOSTICS vRetException = MESSAGE_TEXT;
        RETURN '{"result": ' || to_json(vRetException) || ', "code": 500}';

END;
$$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.AlterarHeroi(pIdHeroi      INTEGER,
                                               pNome         public.heroi."nomeHeroi"%TYPE,
                                               pIdade        public.heroi.idade%TYPE,
                                               pIdCor        public.heroi."idCor"%TYPE,
                                               pIdSuperPoder public.heroi."idSuperPoder"%TYPE
)
    RETURNS JSON AS $$
/*
Documentação
Arquivo Fonte.....: Heroi.sql
Objetivo..........: Alterar Heroi
Autor.............: Forek
Data..............: 26/07/2017
Ex................:
                    SELECT * FROM public.AlterarHeroi(1, 'SuperMan Alt', 33, 1, 1)
*/

DECLARE vRETEXCEPTION VARCHAR(1000);

BEGIN

    UPDATE public.heroi
    SET
        "nomeHeroi"    = pNome,
        idade          = pIdade,
        "idCor"        = pIdCor,
        "idSuperPoder" = pIdSuperPoder
    WHERE id = pIdHeroi;

    RETURN '{"result": "Heroi Alterado com sucesso!", "code":0}';

    EXCEPTION WHEN OTHERS
    THEN
        GET STACKED DIAGNOSTICS vRetException = MESSAGE_TEXT;
        RETURN '{"result": ' || to_json(vRetException) || ', "code": 500}';

END;
$$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.ListarHeroi(pPesquisa VARCHAR(200),
                                              pPagina   INTEGER,
                                              pLinhas   INTEGER)
    RETURNS TABLE(
        "id"        INTEGER,
        "nomeHeroi" VARCHAR(30),
        "idade"     INTEGER,
        "cor"       VARCHAR
    ) AS $$
/*
Documentação
Arquivo Fonte.....: Heroi.sql
Objetivo..........: Alterar Heroi
Autor.............: Forek
Data..............: 26/07/2017
Ex................:
                    SELECT * FROM public.ListarHeroi(null, null, null)
*/

BEGIN
    RETURN QUERY
    SELECT
        h.id,
        h."nomeHeroi",
        h.idade,
        c.cor
    FROM public.heroi h
        INNER JOIN public."Cor" c
            ON c.id = h."idCor"
               AND
               CASE WHEN pPesquisa IS NOT NULL
                   THEN
                       unaccent(h."nomeHeroi") ILIKE '%' || pPesquisa || '%'
               ELSE
                   TRUE
               END
    ORDER BY h."nomeHeroi"
    LIMIT
        CASE WHEN pLinhas > 0 AND pPagina > 0
            THEN pLinhas
        ELSE NULL END
    OFFSET
        CASE WHEN pLinhas > 0 AND pPagina > 0
            THEN (pPagina - 1) * pLinhas
        ELSE NULL END;
END;
$$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.ListarHeroiPorId(pIdHeroi INTEGER)
    RETURNS TABLE(
        "id"           INTEGER,
        "nomeHeroi"    VARCHAR(30),
        "idade"        INTEGER,
        "idCor"        INTEGER,
        "idSuperPoder" INTEGER
    ) AS $$
/*
Documentação
Arquivo Fonte.....: Heroi.sql
Objetivo..........: Alterar Heroi
Autor.............: Forek
Data..............: 26/07/2017
Ex................:
                    SELECT * FROM public.ListarHeroiPorId(2)
*/

BEGIN
    RETURN QUERY
    SELECT
        h.id,
        h."nomeHeroi",
        h.idade,
        h."idCor",
        h."idSuperPoder"
    FROM public.heroi h
    WHERE h.id = pIdHeroi
    ORDER BY h."nomeHeroi";
END;
$$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.ExcluirHeroi(pIdHeroi INTEGER)
    RETURNS JSON AS $$
/*
Documentação
Arquivo Fonte.....: Heroi.sql
Objetivo..........: Alterar Heroi
Autor.............: Forek
Data..............: 26/07/2017
Ex................:
                    SELECT * FROM public.ExcluirHeroi(1)
*/
DECLARE vRETEXCEPTION VARCHAR(1000);

BEGIN

    DELETE FROM public.heroi h
    WHERE id = pIdHeroi;

    RETURN '{"result": "Heroi Deletado com sucesso!", "code":0}';

    EXCEPTION WHEN OTHERS
    THEN
        GET STACKED DIAGNOSTICS vRetException = MESSAGE_TEXT;
        RETURN '{"result": ' || to_json(vRetException) || ', "code": 500}';
END;
$$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.ListarCorDropDown()
    RETURNS TABLE(
        "id"      INTEGER,
        "nomeCor" VARCHAR(30)
    ) AS $$
/*
Documentação
Arquivo Fonte.....: Heroi.sql
Objetivo..........: Listar Super Poder
Autor.............: Forek
Data..............: 26/07/2017
Ex................:
                    SELECT * FROM public.ListarCorDropDown()
*/

BEGIN
    RETURN QUERY
    SELECT
        cr.id,
        cr."nomeCor"
    FROM public."Cor" cr
    ORDER BY cr."nomeCor";

END;
$$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.ListarSuperPoderDropDown()
    RETURNS TABLE(
        "id"      INTEGER,
        "nomeSuperPoder" VARCHAR(30)
    ) AS $$
/*
Documentação
Arquivo Fonte.....: Heroi.sql
Objetivo..........: Listar Super Poder
Autor.............: Forek
Data..............: 26/07/2017
Ex................:
                    SELECT * FROM public.ListarSuperPoderDropDown()
*/

BEGIN
    RETURN QUERY
    SELECT
        sp.id,
        sp."nomeSuperPoder"
    FROM public."superPoder" sp
    ORDER BY sp."nomeSuperPoder";

END;
$$
LANGUAGE plpgsql;

