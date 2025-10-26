// @ts-nocheck -- skip type checking
import * as docs_2 from "../content/docs/installation.mdx?collection=docs"
import * as docs_1 from "../content/docs/index.mdx?collection=docs"
import * as docs_0 from "../content/docs/configuration.mdx?collection=docs"
import { _runtime } from "fumadocs-mdx/runtime/next"
import * as _source from "../source.config"
export const docs = _runtime.docs<typeof _source.docs>([{ info: {"path":"configuration.mdx","fullPath":"content/docs/configuration.mdx"}, data: docs_0 }, { info: {"path":"index.mdx","fullPath":"content/docs/index.mdx"}, data: docs_1 }, { info: {"path":"installation.mdx","fullPath":"content/docs/installation.mdx"}, data: docs_2 }], [{"info":{"path":"meta.json","fullPath":"content/docs/meta.json"},"data":{"pages":["index","installation","configuration"]}}])