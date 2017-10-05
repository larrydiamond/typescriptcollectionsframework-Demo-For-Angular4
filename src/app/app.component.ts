import { Component } from '@angular/core';
import { ArrayList, LinkedList, HashSet, TreeSet, Hashable, AllFieldCollectable, Collectable, AllFieldHashable, Collections, Comparator, ImmutableCollection, JIterator } from 'typescriptcollectionsframework';

export class PetStoreProduct {
  private readonly sku:string;
  public getSku():string { return this.sku; }

  private readonly name:string;
  public getName():string { return this.name; }

  constructor(isku:string, iname:string) {
    this.sku = isku;
    this.name = iname;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active:string = "ArrayList";

  alData:ArrayList<string> = new ArrayList<string>(new AllFieldCollectable<string>());
  llData:LinkedList<string> = new LinkedList<string>(new AllFieldCollectable<string>());
  hsData:HashSet<string> = new HashSet<string>(new AllFieldHashable<string>());
  tsData:TreeSet<string> = new TreeSet<string>(Collections.getStringComparator());

  alAllData:ArrayList<PetStoreProduct> = new ArrayList<PetStoreProduct>(new AllFieldCollectable<PetStoreProduct>());
  llAllData:LinkedList<PetStoreProduct> = new LinkedList<PetStoreProduct>(new AllFieldCollectable<PetStoreProduct>());
  hsAllData:HashSet<PetStoreProduct> = new HashSet<PetStoreProduct>(new AllFieldHashable<PetStoreProduct>());

  alOneData:ArrayList<PetStoreProduct> = new ArrayList<PetStoreProduct>(new PetStoreProductSkuCollectable());
  llOneData:LinkedList<PetStoreProduct> = new LinkedList<PetStoreProduct>(new PetStoreProductSkuCollectable());
  hsOneData:HashSet<PetStoreProduct> = new HashSet<PetStoreProduct>(new AllFieldHashable<PetStoreProduct>());//change

  constructor () {
    this.alData.add ("Cat");
    this.alData.add ("Squirrel");
    this.alData.add ("Dog");

    this.llData.add ("Cat");
    this.llData.add ("Squirrel");
    this.llData.add ("Dog");

    this.hsData.add ("Cat");
    this.hsData.add ("Squirrel");
    this.hsData.add ("Dog");

    this.tsData.add ("Cat");
    this.tsData.add ("Squirrel");
    this.tsData.add ("Dog");

    let psp1:PetStoreProduct = new PetStoreProduct("ABCDE", "Bird Seed");
    let psp2:PetStoreProduct = new PetStoreProduct("FGHIJ", "Cat Food");
    let psp3:PetStoreProduct = new PetStoreProduct("KLMNO", "Dog Food");

    this.alAllData.add (psp1);
    this.alAllData.add (psp2);
    this.alAllData.add (psp3);

    this.llAllData.add (psp1);
    this.llAllData.add (psp2);
    this.llAllData.add (psp3);

    this.hsAllData.add (psp1);
    this.hsAllData.add (psp2);
    this.hsAllData.add (psp3);

    this.alOneData.add (psp1);
    this.alOneData.add (psp2);
    this.alOneData.add (psp3);

    this.llOneData.add (psp1);
    this.llOneData.add (psp2);
    this.llOneData.add (psp3);

    this.hsOneData.add (psp1);
    this.hsOneData.add (psp2);
    this.hsOneData.add (psp3);
  }

  ngOnInit() {
  }

  ArrayList() {
    this.active = "ArrayList";
  }
  LinkedList() {
    this.active = "LinkedList";
  }
  HashSet() {
    this.active = "HashSet";
  }
  TreeSet() {
    this.active = "TreeSet";
  }
  ArrayListAllFields() {
    this.active = "ArrayListAllFields";
  }
  LinkedListAllFields() {
    this.active = "LinkedListAllFields";
  }
  HashSetAllFields() {
    this.active = "HashSetAllFields";
  }
  ArrayListOneField() {
    this.active = "ArrayListOneField";
  }
  LinkedListOneField() {
    this.active = "LinkedListOneField";
  }
  HashSetOneField() {
    this.active = "HashSetOneField";
  }

  addArrayList(newdata:string) {
    this.alData.add (newdata);
  }
  addLinkedList(newdata:string) {
    this.llData.add (newdata);
  }
  addHashSet(newdata:string) {
    this.hsData.add (newdata);
  }
  addTreeSet(newdata:string) {
    this.tsData.add (newdata);
  }
  addArrayListAll(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.alAllData.add (psp);
  }
  addLinkedListAll(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.llAllData.add (psp);
  }
  addHashSetAll(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.hsAllData.add (psp);
  }
  addArrayListOne(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.alOneData.add (psp);
  }
  addLinkedListOne(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.llOneData.add (psp);
  }
  addHashSetOne(newsku:string, newvalue:string) {
    let psp:PetStoreProduct = new PetStoreProduct(newsku, newvalue);
    this.hsOneData.add (psp);
  }
  removeArrayListEntry(olddata:string) {
    this.alData.remove(olddata);
  }
  removeLinkedListEntry(olddata:string) {
    this.llData.remove(olddata);
  }
  removeHashSetEntry(olddata:string) {
    this.hsData.remove(olddata);
  }
  removeTreeSetEntry(olddata:string) {
    this.tsData.remove(olddata);
  }
  removeArrayListAllEntry(oldpsp:PetStoreProduct) {
    this.alAllData.remove(oldpsp);
  }
  removeLinkedListAllEntry(oldpsp:PetStoreProduct) {
    this.llAllData.remove(oldpsp);
  }
  removeHashSetAllEntry(oldpsp:PetStoreProduct) {
    this.hsAllData.remove(oldpsp);
  }
  removeArrayListOneEntry(oldpsp:PetStoreProduct) {
    this.alOneData.remove(oldpsp);
  }
  removeLinkedListOneEntry(oldpsp:PetStoreProduct) {
    this.llOneData.remove(oldpsp);
  }
  removeHashSetOneEntry(oldpsp:PetStoreProduct) {
    this.hsOneData.remove(oldpsp);
  }
}

export class PetStoreProductSkuCollectable implements Collectable<PetStoreProduct> {
  equals (instance1 : PetStoreProduct, instance2 : PetStoreProduct) : boolean {
    if (instance1 === undefined) {
      if (instance2 === undefined) {
        return true;
      } else {
        return false;
      }
    }
    if (instance1 === null) {
      if (instance2 === null) {
        return true;
      } else {
        return false;
      }
    }
    if ((instance2 === null) || (instance2 === undefined)) {
      return false;
    }

    if (instance1.getSku() === instance2.getSku()) {  // what we're really comparing here
      return true;
    }

    return false;
  }
}



export class PetStoreProductHashable implements Hashable<PetStoreProduct> {
  equals (o1: PetStoreProduct, o2: PetStoreProduct) : boolean {
    if (o1 === undefined) {
      if (o2 === undefined) {
        return true;
      } else {
        return false;
      }
    }
    if (o1 === null) {
      if (o2 === null) {
        return true;
      } else {
        return false;
      }
    }
    if ((o2 === null) || (o2 === undefined)) {
      return false;
    }

    if (JSON.stringify(o1.getSku()) === JSON.stringify(o2.getSku()))
      return true;
    return false;
  };
  hashCode (o:PetStoreProduct) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:string = JSON.stringify (o);
    let hash: number = 0;
    for (let loop = 0; loop < tmp.length; loop++) {
      let n:number = tmp.charCodeAt (loop);
      hash = ((hash * 256) + n) % 1000000000;
    }
    return hash;
  };

  getHashCodeForString (o:string) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:string = JSON.stringify (o);
    let hash: number = 0;
    for (let loop = 0; loop < tmp.length; loop++) {
      let n:number = tmp.charCodeAt (loop);
      hash = ((hash * 256) + n) % 1000000000;
    }
    return hash;
  }

  getHashCodeForStringArray (o:string[]) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:number = 0;
    for (let loop = 0; loop < o.length; loop++) {
      let ostr:string = o [loop];
      tmp = ((tmp * 256) + this.getHashCodeForString (ostr)) % 1000000000;
    }
    return tmp;
  }

  getHashCodeForStrings (o:ImmutableCollection<string>) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }
    let tmp:number = 0;
    for (let iter:JIterator<string> = o.iterator(); iter.hasNext(); ) {
      let ostr:string = iter.next();
      tmp = ((tmp * 256) + this.getHashCodeForString (ostr)) % 1000000000;
    }
    return tmp;
  }

  getHashCodeForNumber (o:number) : number {
    if (o === undefined) {
      return 0;
    }
    if (o === null) {
      return 0;
    }

    let tmp:number = o;
    while ((tmp < 1000000000) && (Math.floor (tmp) !== tmp)) {
      tmp = tmp * 10;
    }

    return tmp;
  }
}
