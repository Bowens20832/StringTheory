import glob from 'fast-glob'

async function importCerts(filename) {
  let { cert } = await import(`../app/certifications/${filename}`)

  return {
    slug: filename.replace(/(\/page)?\.mdx$/, ''),
    ...cert,
  }
}

export async function getAllCerts() {
  let certFilenames = await glob('*/page.mdx', {
    cwd: './src/app/certifications',
  })

  let certs = await Promise.all(certFilenames.map(importCerts))

  return certs.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
